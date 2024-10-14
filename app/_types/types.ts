export interface ButtonProps {
  title?: string;
  bg?: "gradient" | "background" | "";
  type?:
    | "box1"
    | "box2"
    | "box3"
    | "box4"
    | "box5"
    | "box6"
    | "box7"
    | "box8"
    | "box9"; // به دلخواه تعیین کنید
  href: string;
  shadow?: boolean;
}

export interface PlanProps {
  id: number;
  name: string;
  speed: string;
  customization: string;
  seo: boolean;
  custom_color: boolean;
  learning_program: boolean;
  backup: string;
  delivery_time: number;
  price: number;
}
export interface BriefFeacherProps {
  title?: string;
  src: string;
}
export interface SocialmediaProps {
  title: string;
  bg: string;
  iconsm: string;
  iconmd: string;
}
export interface FeaturesOfThePlanProps {
  id: number;
}

export interface Feature {
  id: number;
  title: string;
  addLink: string;
  editLink: string;
}

export interface ApplicationArr {
  id: number;
  title: string;
  Link: string;
  allFeaturesApp: Feature[];
}

export interface ApplicationProps {
  title: string;
  link: string;
  allFeaturesApp: Feature[];
}

export default interface Plan {
  id: number;
  name: string;
  speed: string;
  customization: string;
  seo: boolean;
  custom_color: boolean;
  learning_program: boolean;
  backup: string;
  delivery_time: number;
  price: number;
  video: string;
}

export default interface PlansProps {
  plans: Plan[];
}
