export default function HelpPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-muted-foreground">Find answers to your questions and get support for your travel needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: "Booking Support",
            description: "Get help with your tour bookings, payments, and reservations.",
          },
          {
            title: "Travel Information",
            description: "Learn about travel requirements, documentation, and preparations.",
          },
          {
            title: "Contact Us",
            description: "Reach out to our support team for personalized assistance.",
          },
        ].map((section, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-muted-foreground mb-4">{section.description}</p>
            <button className="text-ef-teal hover:text-ef-teal/90 font-medium">
              Learn more →
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              question: "How do I make a booking?",
              answer: "You can book your tour online through our website or contact our sales team for assistance.",
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, bank transfers, and payment plans for eligible tours.",
            },
            {
              question: "Can I modify my booking?",
              answer: "Yes, you can modify your booking up to 60 days before departure, subject to availability.",
            },
            {
              question: "What's included in the tour price?",
              answer: "Tour prices typically include accommodation, transportation, guided tours, and select meals.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}