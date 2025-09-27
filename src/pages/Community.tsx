import React, { useState } from 'react';
import { 
  Users, MessageSquare, Send, Search, Plus, MoreVertical, 
  Phone, Video, Settings, Star, Pin, Hash, Bell, User
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/layout/Header';
import BackButton from '@/components/ui/back-button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import alexAvatar from '@/assets/avatars/alex-johnson.jpg';
import sarahAvatar from '@/assets/avatars/sarah-chen.jpg';
import michaelAvatar from '@/assets/avatars/michael-rodriguez.jpg';

const Community: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string>('1');
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const user = {
    name: 'Sarah Chen',
    email: 'sarah.chen@gmail.com',
    role: 'alumni' as const,
    avatar: sarahAvatar
  };

  // Mock alumni groups data
  const alumniGroups = [
    {
      id: '1',
      name: 'Class of 2018 - Computer Science',
      description: 'Stay connected with your CS batch mates',
      members: 124,
      avatar: '🎓',
      isPrivate: false,
      lastActivity: '2 hours ago',
      unreadCount: 8,
      isOnline: true,
      lastMessage: 'Alex: Just saw the news about our college getting ranked #1! 🎉'
    },
    {
      id: '2', 
      name: 'Tech Alumni Network',
      description: 'Professional networking for tech industry alumni',
      members: 847,
      avatar: '💻',
      isPrivate: false,
      lastActivity: '1 hour ago',
      unreadCount: 23,
      isOnline: true,
      lastMessage: 'John: Just posted a new SDE opening at Amazon. DM me!'
    },
    {
      id: '3',
      name: 'Bay Area Alumni',
      description: 'Alumni living in San Francisco Bay Area',
      members: 298,
      avatar: '🌉',
      isPrivate: false,
      lastActivity: '30 min ago',
      unreadCount: 5,
      isOnline: true,
      lastMessage: 'Maria: Weekend meetup at Golden Gate Park?'
    },
    {
      id: '4',
      name: 'Startup Founders Circle',
      description: 'Exclusive group for alumni entrepreneurs',
      members: 67,
      avatar: '🚀',
      isPrivate: true,
      lastActivity: '4 hours ago',
      unreadCount: 0,
      isOnline: false,
      lastMessage: 'David: Secured Series A funding! Thanks for the advice'
    },
    {
      id: '8',
      name: 'Class of 2020 - Business',
      description: 'MBA graduates networking group',
      members: 89,
      avatar: '📈',
      isPrivate: false,
      lastActivity: '1 day ago',
      unreadCount: 12,
      isOnline: true,
      lastMessage: 'Rachel: Anyone interested in a finance career panel?'
    },
    {
      id: '9',
      name: 'Women in Tech Alumni',
      description: 'Supporting women alumni in technology careers',
      members: 156,
      avatar: '👩‍💻',
      isPrivate: false,
      lastActivity: '3 hours ago',
      unreadCount: 18,
      isOnline: true,
      lastMessage: 'Jennifer: Mentorship program applications are now open!'
    },
    {
      id: '10',
      name: 'International Alumni',
      description: 'Global network of international graduates',
      members: 423,
      avatar: '🌍',
      isPrivate: false,
      lastActivity: '5 hours ago',
      unreadCount: 7,
      isOnline: true,
      lastMessage: 'Kumar: Virtual reunion planning meeting tomorrow'
    }
  ];

  // Mock direct messages
  const directMessages = [
    {
      id: '5',
      name: 'Alex Johnson',
      role: 'Software Engineer at Google',
      avatar: alexAvatar,
      lastMessage: 'Hey Sarah! Are you free for a coffee this weekend?',
      timestamp: '10 min ago',
      unreadCount: 2,
      isOnline: true,
      isTyping: false
    },
    {
      id: '6', 
      name: 'Michael Rodriguez',
      role: 'Product Manager at Meta',
      avatar: michaelAvatar,
      lastMessage: 'Thanks for the referral! Got the interview 🎉',
      timestamp: '1 hour ago',
      unreadCount: 0,
      isOnline: true,
      isTyping: true
    },
    {
      id: '7',
      name: 'Emma Davis',
      role: 'Data Scientist at Netflix',
      avatar: '',
      lastMessage: 'The mentorship session was really helpful',
      timestamp: '2 days ago',
      unreadCount: 1,
      isOnline: false,
      isTyping: false
    },
    {
      id: '11',
      name: 'Dr. Jennifer Kim',
      role: 'Professor at Stanford',
      avatar: '',
      lastMessage: 'Would love to discuss the research collaboration',
      timestamp: '3 hours ago',
      unreadCount: 3,
      isOnline: true,
      isTyping: false
    },
    {
      id: '12',
      name: 'Robert Chen',
      role: 'Startup Founder',
      avatar: '',
      lastMessage: 'The investor meeting went great! 🚀',
      timestamp: '1 day ago',
      unreadCount: 0,
      isOnline: false,
      isTyping: false
    },
    {
      id: '13',
      name: 'Lisa Park',
      role: 'UX Designer at Apple',
      avatar: '',
      lastMessage: 'Thanks for the design feedback!',
      timestamp: '2 days ago',
      unreadCount: 0,
      isOnline: true,
      isTyping: false
    }
  ];

  // Mock pending messages
  const pendingMessages = [
    {
      id: 'p1',
      from: 'Career Services',
      subject: 'New Job Opportunities Available',
      preview: '5 new positions at top tech companies...',
      timestamp: '1 hour ago',
      type: 'system'
    },
    {
      id: 'p2', 
      from: 'Alumni Association',
      subject: 'Reunion 2024 Planning Committee',
      preview: 'Join us in organizing the biggest reunion yet...',
      timestamp: '3 hours ago',
      type: 'official'
    },
    {
      id: 'p3',
      from: 'Mentorship Program',
      subject: 'New Mentee Match Available',
      preview: 'A Computer Science student is looking for guidance...',
      timestamp: '1 day ago',
      type: 'mentorship'
    }
  ];

  // Mock chat messages for selected chat
  const chatMessages = {
    '1': [
      {
        id: '1',
        sender: 'Alex Johnson',
        avatar: alexAvatar,
        message: 'Hey everyone! Just saw the news about our college getting ranked #1 in CS! 🎉',
        timestamp: '2:30 PM',
        isOwn: false
      },
      {
        id: '2',
        sender: 'Michael Rodriguez', 
        avatar: michaelAvatar,
        message: 'That\'s amazing! So proud of our alma mater 👏',
        timestamp: '2:32 PM',
        isOwn: false
      },
      {
        id: '3',
        sender: 'You',
        avatar: sarahAvatar,
        message: 'This is incredible! Remember when we thought our department was underrated? Look at us now! 🚀',
        timestamp: '2:35 PM',
        isOwn: true
      },
      {
        id: '4',
        sender: 'Emma Davis',
        avatar: '',
        message: 'We should organize a celebration meetup! Maybe at that cafe near campus?',
        timestamp: '2:38 PM',
        isOwn: false
      },
      {
        id: '5',
        sender: 'Alex Johnson',
        avatar: alexAvatar,
        message: 'Great idea Emma! I can reach out to more classmates. @Sarah what do you think about next weekend?',
        timestamp: '2:40 PM',
        isOwn: false
      }
    ],
    '2': [
      {
        id: '1',
        sender: 'John Smith',
        avatar: '',
        message: 'Just posted a new SDE opening at Amazon. DM me if interested!',
        timestamp: '1:15 PM',
        isOwn: false
      },
      {
        id: '2',
        sender: 'Lisa Park',
        avatar: '',
        message: 'Thanks John! Forwarding to my friend who\'s looking',
        timestamp: '1:20 PM', 
        isOwn: false
      }
    ]
  };

  const getCurrentMessages = () => {
    return chatMessages[selectedChat as keyof typeof chatMessages] || [];
  };

  const getSelectedChatInfo = () => {
    const allChats = [...alumniGroups, ...directMessages];
    return allChats.find(chat => chat.id === selectedChat);
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // In a real app, this would send the message to backend
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  const filteredGroups = alumniGroups.filter(group => 
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDMs = directMessages.filter(dm => 
    dm.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Header user={user} />
      
      <div className="container px-6 py-8 max-w-7xl mx-auto">
        <BackButton to="/alumni/dashboard" />
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-corporate rounded-xl flex items-center justify-center shadow-corporate">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Alumni Community</h1>
              <p className="text-muted-foreground">Connect with fellow alumni and stay engaged</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="px-3 py-1">
              <Users className="h-3 w-3 mr-1" />
              1,247 Active Members
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              <MessageSquare className="h-3 w-3 mr-1" />
              15 New Messages
            </Badge>
          </div>
        </div>

        {/* Main Community Interface */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* Left Sidebar - Groups & DMs List */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Search */}
            <Card className="widget-container">
              <CardContent className="widget-content pt-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Chat Tabs */}
            <Tabs defaultValue="groups" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="groups">Groups</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
              </TabsList>
              
              <TabsContent value="groups" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Alumni Groups</h3>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    Join Group
                  </Button>
                </div>
                
                {filteredGroups.map((group) => (
                  <Card 
                    key={group.id} 
                    className={`cursor-pointer transition-colors ${selectedChat === group.id ? 'bg-primary/10 border-primary' : 'hover:bg-muted/50'}`}
                    onClick={() => setSelectedChat(group.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-lg">
                          {group.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-sm truncate">{group.name}</h4>
                            {group.unreadCount > 0 && (
                              <Badge variant="destructive" className="text-xs px-2 py-0">
                                {group.unreadCount}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground truncate mb-2">
                            {group.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {group.members} members
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {group.lastActivity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="messages" className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Direct Messages</h3>
                  <Button size="sm" variant="outline">
                    <Plus className="h-4 w-4 mr-1" />
                    New Chat
                  </Button>
                </div>
                
                {filteredDMs.map((dm) => (
                  <Card 
                    key={dm.id}
                    className={`cursor-pointer transition-colors ${selectedChat === dm.id ? 'bg-primary/10 border-primary' : 'hover:bg-muted/50'}`}
                    onClick={() => setSelectedChat(dm.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="relative">
                          <Avatar className="h-10 w-10">
                            {dm.avatar ? (
                              <AvatarImage src={dm.avatar} alt={dm.name} />
                            ) : (
                              <AvatarFallback className="bg-primary/10 text-primary">
                                {dm.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            )}
                          </Avatar>
                          {dm.isOnline && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-sm truncate">{dm.name}</h4>
                            {dm.unreadCount > 0 && (
                              <Badge variant="destructive" className="text-xs px-2 py-0">
                                {dm.unreadCount}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground truncate mb-1">
                            {dm.role}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex-1 mr-2">
                              <p className="text-xs text-foreground/80 truncate font-medium">
                                {dm.lastMessage}
                              </p>
                              {dm.isTyping && (
                                <p className="text-xs text-primary italic">typing...</p>
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {dm.timestamp}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Side - Chat Interface */}
          <div className="lg:col-span-8">
            <Card className="widget-container h-[600px] flex flex-col">
              
              {/* Chat Header */}
              {getSelectedChatInfo() && (
                <CardHeader className="widget-header border-b flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        {getSelectedChatInfo()?.avatar && getSelectedChatInfo()?.avatar.startsWith('http') ? (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={getSelectedChatInfo()?.avatar} alt={getSelectedChatInfo()?.name} />
                          </Avatar>
                        ) : getSelectedChatInfo()?.avatar && !getSelectedChatInfo()?.avatar.startsWith('http') ? (
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-lg">
                            {getSelectedChatInfo()?.avatar}
                          </div>
                        ) : (
                          <Avatar className="h-10 w-10">
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {getSelectedChatInfo()?.name.split(' ').map((n: string) => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        {'isOnline' in getSelectedChatInfo()! && getSelectedChatInfo()!.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold">{getSelectedChatInfo()?.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {'members' in getSelectedChatInfo()! 
                            ? `${(getSelectedChatInfo() as any).members} members`
                            : 'role' in getSelectedChatInfo()! 
                            ? (getSelectedChatInfo() as any).role 
                            : 'Online'
                          }
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="ghost">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              )}

              {/* Chat Messages */}
              <CardContent className="widget-content flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {getCurrentMessages().map((message) => (
                    <div key={message.id} className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex space-x-3 max-w-xs lg:max-w-md ${message.isOwn ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <Avatar className="h-8 w-8 flex-shrink-0">
                          {message.avatar ? (
                            <AvatarImage src={message.avatar} alt={message.sender} />
                          ) : (
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {message.sender.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div className={`${message.isOwn ? 'bg-primary text-primary-foreground' : 'bg-muted'} rounded-lg p-3`}>
                          {!message.isOwn && (
                            <p className="text-xs font-medium mb-1 text-primary">{message.sender}</p>
                          )}
                          <p className="text-sm">{message.message}</p>
                          <p className={`text-xs mt-1 ${message.isOwn ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Message Input */}
              <div className="border-t p-4 flex-shrink-0">
                <div className="flex space-x-3">
                  <Textarea
                    placeholder="Type your message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    className="flex-1 min-h-[40px] max-h-[120px] resize-none"
                    rows={1}
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!messageInput.trim()}
                    className="corporate-button"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Community Sections */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          
          {/* Pending Messages */}
          <Card className="widget-container">
            <CardHeader className="widget-header">
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary" />
                Pending Messages
              </CardTitle>
              <CardDescription>
                Important messages waiting for your attention
              </CardDescription>
            </CardHeader>
            <CardContent className="widget-content">
              <div className="space-y-3">
                {pendingMessages.map((message) => (
                  <div key={message.id} className="data-point">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white">
                        {message.type === 'system' ? '🔔' : message.type === 'official' ? '🏛️' : '🤝'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-sm truncate">{message.from}</h4>
                          <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                        </div>
                        <p className="text-sm font-medium mb-1 truncate">{message.subject}</p>
                        <p className="text-xs text-muted-foreground truncate">{message.preview}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Group Invitations */}
          <Card className="widget-container">
            <CardHeader className="widget-header">
              <CardTitle className="flex items-center">
                <Bell className="h-5 w-5 mr-2 text-primary" />
                Group Invitations
              </CardTitle>
              <CardDescription>
                Groups you've been invited to join
              </CardDescription>
            </CardHeader>
            <CardContent className="widget-content">
              <div className="space-y-4">
                {[
                  {
                    name: 'Data Science Alumni',
                    description: 'Connect with fellow data science graduates',
                    members: 156,
                    avatar: '📊',
                    invitedBy: 'Dr. Smith'
                  },
                  {
                    name: 'Research Alumni Network', 
                    description: 'Academic and industry researchers',
                    members: 89,
                    avatar: '🔬',
                    invitedBy: 'Prof. Johnson'
                  }
                ].map((invitation, index) => (
                  <div key={index} className="data-point">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white text-lg">
                        {invitation.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm mb-1">{invitation.name}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{invitation.description}</p>
                        <p className="text-xs text-muted-foreground mb-3">
                          Invited by {invitation.invitedBy} • {invitation.members} members
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="corporate-button">
                            Accept
                          </Button>
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Community Stats */}
        <Card className="widget-container mt-6">
          <CardHeader className="widget-header">
            <CardTitle className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Community Activity
            </CardTitle>
            <CardDescription>
              Recent activity across all alumni groups
            </CardDescription>
          </CardHeader>
          <CardContent className="widget-content">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="data-point text-center">
                <div className="text-2xl font-bold text-primary">1,247</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="data-point text-center">
                <div className="text-2xl font-bold text-primary">89</div>
                <div className="text-sm text-muted-foreground">Messages Today</div>
              </div>
              <div className="data-point text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Active Groups</div>
              </div>
              <div className="data-point text-center">
                <div className="text-2xl font-bold text-primary">156</div>
                <div className="text-sm text-muted-foreground">New Connections</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;