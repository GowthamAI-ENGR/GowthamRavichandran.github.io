const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono-code text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gowtham Ravichandran. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          {["About", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
