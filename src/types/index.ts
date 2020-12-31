interface page {
  no: number;
  forward: boolean;
}

interface defaultProps {
  setPage: React.Dispatch<React.SetStateAction<page>>;
  page: page;
}

interface stackProps {
  name: string;
  color: string;
  backgroundColor: string;
}

export { page, defaultProps, stackProps };
