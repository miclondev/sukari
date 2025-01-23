"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Account Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and settings.</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Profile Picture</label>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 rounded-full bg-ef-orange text-white flex items-center justify-center text-2xl">
                      JD
                    </div>
                    <Button variant="outline">Change Photo</Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="password">
          <Card className="p-6">
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium mb-1">Current Password</label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium mb-1">New Password</label>
                  <Input id="newPassword" type="password" />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">Confirm New Password</label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Update Password</Button>
              </div>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Trip Updates</p>
                      <p className="text-sm text-muted-foreground">Receive updates about your upcoming trips</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">Daily</Button>
                      <Button variant="outline" size="sm">Weekly</Button>
                      <Button size="sm">Off</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Promotional Emails</p>
                      <p className="text-sm text-muted-foreground">Receive emails about special offers and deals</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">On</Button>
                      <Button size="sm">Off</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Newsletter</p>
                      <p className="text-sm text-muted-foreground">Get travel tips and destination guides</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">On</Button>
                      <Button size="sm">Off</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button>Save Preferences</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}