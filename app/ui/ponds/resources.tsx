
  
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.

  export default function ResourceLinks({links}: any) {
    
    return (
      <>
        {links.map((link: any) => {
          const LinkIcon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              className="mt-3 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-green-500 p-3 text-sm font-medium hover:bg-green-400 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </a>
          );
        })}
      </>
    );
  }
  