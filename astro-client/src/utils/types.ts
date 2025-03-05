export interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export interface Logo {
  id: number;
  logoText: string;
  logoLink: string;
  image: Image;
}

export interface Link {
  href: string;
  label?: string;
  isExternal?: boolean;
  isButtonLink?: boolean;
  type?: "PRIMARY" | "SECONDARY";
}

export interface GlobalPageHeader {
  logo: Logo;
  navItems: Link[];
  cta: Link;
}

export type ComponentType =
  | "blocks.hero"
  | "blocks.heading-section"
  | "blocks.card-grid"
  | "blocks.content-with-image"
  | "blocks.faqs"
  | "blocks.person-card";

export interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>
> {
  id: number;
  __component: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export interface HeroProps extends Base<"blocks.hero"> {
  heading: string;
  text: string;
  image: Image;
  links: Link[];
}

export interface HeadingSectionProps extends Base<"blocks.heading-section"> {
  subHeading: string;
  heading: string;
  anchorLink: string;
}

export interface CardGridProps extends Base<"blocks.card-grid"> {
  card: {
    id: number;
    heading: string;
    text: string;
    image: Image;
  }[];
}

export interface ContentWithImageProps
  extends Base<"blocks.content-with-image"> {
  heading: string;
  text: string;
  link: Link;
  image: Image;
  reversed: boolean;
}

export interface FaqsProps extends Base<"blocks.faqs"> {
  faq: {
    heading: string;
    text: string;
  }[];
}
export interface PersonCardProps extends Base<"blocks.person-card"> {
  personName: string;
  personJob: string;
  image: Image;
  text: string;
}

export type BlockData =
  | HeroProps
  | HeadingSectionProps
  | CardGridProps
  | ContentWithImageProps
  | FaqsProps
  | PersonCardProps;
