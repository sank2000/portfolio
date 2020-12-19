interface page {
  no: number;
  forward: boolean;
}

interface defaultProps {
  setPage: React.Dispatch<React.SetStateAction<page>>;
  page: page;
}

export { page, defaultProps };
