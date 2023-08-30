export interface Menu {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  subs?: string[];
}

export const menus: Menu[] = [
  {
    title: 'Home',
    icon: '🎮',
    href: '/',
    subs: ['Switch', 'Tabs', 'Slide', 'Stacks', 'Refresh', 'ReOrder'],
  },
  {
    title: 'Scroll',
    icon: '🎧',
    href: '/scroll',
    subs: [],
  },
  {
    title: 'Layout',
    icon: '🏆',
    href: '/layout',
    subs: ['Gallery', 'SortList', 'Cycle'],
  },
  {
    title: 'Effects',
    icon: '🎸',
    href: '/effects',
    subs: ['CircleWave'],
  },
  { title: 'Apple', href: '/apple', icon: '🍎' },
  { title: 'Copy2', href: '/copy2', icon: '🎈' },
];
