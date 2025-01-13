export type LibraryType = {
  name: string;
  link: string;
};

export type LibraryTypeArray = LibraryType[];

export type LibraryDetails = {
  id: number;
  name: string;
  description: string;
  documentation: string;
  install_command: string;
};
