export default function OrganizePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">Organize a Group Tour</h1>
      <p className="text-muted-foreground mb-8">Plan an unforgettable experience for your group with our expert travel planners.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why organize with EF?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#0A3D2D] rounded-full mt-2 mr-2"></span>
              <span>Dedicated tour consultant to help plan every detail</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#0A3D2D] rounded-full mt-2 mr-2"></span>
              <span>Flexible payment options for your group</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#0A3D2D] rounded-full mt-2 mr-2"></span>
              <span>Customizable itineraries to match your interests</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-[#0A3D2D] rounded-full mt-2 mr-2"></span>
              <span>Special group rates and exclusive benefits</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="groupName" className="block text-sm font-medium mb-1">Group Name</label>
              <input
                type="text"
                id="groupName"
                className="w-full rounded-md border border-input px-3 py-2"
                placeholder="Enter your group name"
              />
            </div>
            <div>
              <label htmlFor="groupSize" className="block text-sm font-medium mb-1">Estimated Group Size</label>
              <input
                type="number"
                id="groupSize"
                className="w-full rounded-md border border-input px-3 py-2"
                placeholder="Enter estimated number of travelers"
              />
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium mb-1">Preferred Destination</label>
              <input
                type="text"
                id="destination"
                className="w-full rounded-md border border-input px-3 py-2"
                placeholder="Where would you like to go?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0A3D2D] text-white py-2 rounded-md hover:bg-[#0A3D2D]/90"
            >
              Request Information
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}