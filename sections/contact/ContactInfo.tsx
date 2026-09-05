import { Mail, Phone, Globe, MapPin } from "lucide-react";

const items = [
  { icon: Mail, label: "Email", value: "info@iten.tv", href: "mailto:info@iten.tv" },
  { icon: Phone, label: "Phone", value: "(520) 757-3019", href: "tel:15207573019" },
  {
    icon: Globe,
    label: "Website",
    value: "baggedandtaggedfilms.com",
    href: "https://www.baggedandtaggedfilms.com",
  },
  { icon: MapPin, label: "Industry", value: "Automotive Documentary Films" },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      {items.map(({ icon: Icon, label, value, href }) => {
        const content = (
          <div className="flex items-start gap-4">
            <span className="p-3 rounded-sm border border-border text-orange-bright">
              <Icon size={20} />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-text-muted">
                {label}
              </p>
              <p className="mt-1 text-lg font-display text-text">{value}</p>
            </div>
          </div>
        );

        return href ? (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="hover:opacity-80 transition-opacity"
          >
            {content}
          </a>
        ) : (
          <div key={label}>{content}</div>
        );
      })}
    </div>
  );
}
