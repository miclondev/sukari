export default function SalesTeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Sales Team</h1>
        <p className="text-muted-foreground">Connect with our expert travel consultants to plan your next adventure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Sarah Miller",
            role: "Senior Travel Consultant",
            region: "Europe Specialist",
            phone: "+1 (555) 123-4567",
            email: "sarah.m@eftours.com",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400",
          },
          {
            name: "David Chen",
            role: "Travel Consultant",
            region: "Asia Specialist",
            phone: "+1 (555) 234-5678",
            email: "david.c@eftours.com",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
          },
          {
            name: "Maria Garcia",
            role: "Travel Consultant",
            region: "Americas Specialist",
            phone: "+1 (555) 345-6789",
            email: "maria.g@eftours.com",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
          },
        ].map((consultant) => (
          <div key={consultant.email} className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={consultant.image}
                  alt={consultant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold">{consultant.name}</h3>
                <p className="text-sm text-muted-foreground">{consultant.role}</p>
                <p className="text-sm text-ef-teal">{consultant.region}</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm">
                <span className="font-medium">Phone:</span>{" "}
                <a href={`tel:${consultant.phone}`} className="text-ef-teal hover:underline">
                  {consultant.phone}
                </a>
              </p>
              <p className="text-sm">
                <span className="font-medium">Email:</span>{" "}
                <a href={`mailto:${consultant.email}`} className="text-ef-teal hover:underline">
                  {consultant.email}
                </a>
              </p>
            </div>
            <div className="mt-4 pt-4 border-t">
              <button className="w-full bg-ef-teal text-white py-2 rounded-md hover:bg-ef-teal/90 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-ef-teal/10 rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Planning Your Trip?</h2>
          <p className="text-muted-foreground mb-6">
            Our travel consultants are here to help you create the perfect itinerary tailored to your interests and preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-ef-teal text-white px-6 py-2 rounded-md hover:bg-ef-teal/90 transition-colors">
              Request a Callback
            </button>
            <button className="border border-ef-teal text-ef-teal px-6 py-2 rounded-md hover:bg-ef-teal/10 transition-colors">
              Browse Tour Packages
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}