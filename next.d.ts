declare module 'next/link' {
  import { ComponentType, AnchorHTMLAttributes, ReactNode } from 'react';
  
  interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string | object;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean | null;
    children?: ReactNode;
  }
  
  const Link: ComponentType<LinkProps>;
  export default Link;
}
