export interface NavItem {
  label: string;
  href: string;
}

export interface Mentor {
  name: string;
  title: string;
  image?: string;
  type: "resident" | "flying";
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ActivityPhoto {
  src: string;
  alt: string;
}

export interface Sponsor {
  name: string;
  logo: string;
}

export interface ContactInfo {
  email: string;
}
