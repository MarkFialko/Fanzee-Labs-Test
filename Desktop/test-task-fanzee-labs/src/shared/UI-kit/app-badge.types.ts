export enum BadgeVariant {
  GREEN = 'green',
  RED = 'red',
  LIGHT_BLUE = 'light-blue',
  PURPLE = 'purple',
}

export interface IBadge {
  title: string;
  icon: string;
  variant: BadgeVariant;
}
