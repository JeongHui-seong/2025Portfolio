export interface ProjectDetailItem {
  title: string;
  img: string;
  content: string;
}

export interface ProjectDialog {
  platform: string;
  title: string;
  date: string;
  tech: string;
  part: string;
  description: string;
  video: string | null;
  detail: ProjectDetailItem[];
}

export interface ProjectData {
  id: number;
  subtitle: string;
  thumbnail: string;
  title: string;
  date: string;
  tags: string[];
  link?: string;
  linkType?: string;
  dialog: ProjectDialog;
}

export interface ProjectCardProps {
  projectData: ProjectData;
}