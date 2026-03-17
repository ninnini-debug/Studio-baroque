const SERVICES_LIST = [
  { name: "Acrylics", items: ["Full Set", "Infills", "Removal"] },
  { name: "Gel & BIAB", items: ["Gel Polish", "Builder Gel", "Removal"] },
  { name: "Nail Art", items: ["Simple Art", "Detailed Art", "3D & Charms"] },
  { name: "Natural Care", items: ["Luxury Manicure", "Nail Repair"] },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 lg:py-40">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <p
          className="text-[10px] tracking-[0.5em] uppercase text-[#C9A962] mb-4"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Services
        </p>
        <h2
          className="text-3xl md:text-4xl font-light text-[#F2EDE4] mb-16"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          The Menu
        </h2>
        <div className="space-y-14">
          {SERVICES_LIST.map((group) => (
            <div key={group.name}>
              <h3
                className="text-sm tracking-[0.3em] uppercase text-[#F2EDE4]/90 mb-6"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {group.name}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[#B8B4A8] text-[15px] border-b border-[#C9A962]/20 py-2 last:border-0"
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
