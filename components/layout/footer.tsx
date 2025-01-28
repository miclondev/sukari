const footerSections = [
  {
    title: "GET IN TOUCH",
    items: ["1-800-500-100", "Chat with us", "Email us"],
  },
  {
    title: "TRIPS",
    items: ["Europe trips", "Asia trips", "Africa trips", "Americas trips"],
  },
  {
    title: "TRAVEL RESOURCES",
    items: ["Trip protection", "Travel tips", "Packing guides", "Travel safety & support"],
  },
  {
    title: "ABOUT GO AHEAD",
    items: ["Who we are", "Why go guided", "Reviews", "Careers"],
  },
  {
    title: "EF PROGRAMS BY AGE",
    items: [
      "Middle school students",
      "High school students",
      "College students",
      "Young adults",
      "Adults 50+",
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ef-teal text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm">
          <p>&copy; 2024 EF Education First. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
