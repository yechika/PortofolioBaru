"use client";

import StaggeredMenu from './StaggeredMenu';

export function Navbar() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
    { label: 'Projects', ariaLabel: 'View projects', link: '#projects' },
    { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/yechika' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/danieldtara' }
  ];

  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={["#0b1020", "#111827"]}
      logoUrl="/logo2.png"
      accentColor="#22d3ee"
      onMenuOpen={() => {}}
      onMenuClose={() => {}}
    />
  );
}