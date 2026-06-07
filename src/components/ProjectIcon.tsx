import {
  IconArrowUpRight,
  IconBolt,
  IconBrain,
  IconBrandAstro,
  IconBrandDocker,
  IconBuildingStore,
  IconChartBar,
  IconClipboardList,
  IconCloudUpload,
  IconCode,
  IconDatabase,
  IconDeviceDesktopAnalytics,
  IconFileInvoice,
  IconFileSpreadsheet,
  IconFileTypePdf,
  IconForms,
  IconHistory,
  IconLayoutDashboard,
  IconLifebuoy,
  IconLock,
  IconMailForward,
  IconPackage,
  IconPhoto,
  IconPlugConnected,
  IconReceiptTax,
  IconRefresh,
  IconRobot,
  IconRoute,
  IconSearch,
  IconServer,
  IconShieldCheck,
  IconStack2,
  IconTags,
  IconTargetArrow,
  IconTruckDelivery,
  IconUserCheck,
  IconUsersGroup,
  type IconProps,
} from '@tabler/icons-react';
import type { ComponentType } from 'react';
import type { ProjectIconKey } from '../data/projects';

type ProjectIconProps = IconProps & {
  icon?: ProjectIconKey;
};

const icons: Record<ProjectIconKey, ComponentType<IconProps>> = {
  'arrow-up-right': IconArrowUpRight,
  bolt: IconBolt,
  brain: IconBrain,
  'brand-astro': IconBrandAstro,
  'brand-docker': IconBrandDocker,
  'building-store': IconBuildingStore,
  'chart-bar': IconChartBar,
  'clipboard-list': IconClipboardList,
  'cloud-upload': IconCloudUpload,
  code: IconCode,
  database: IconDatabase,
  'device-desktop-analytics': IconDeviceDesktopAnalytics,
  'file-invoice': IconFileInvoice,
  'file-spreadsheet': IconFileSpreadsheet,
  'file-type-pdf': IconFileTypePdf,
  forms: IconForms,
  history: IconHistory,
  'layout-dashboard': IconLayoutDashboard,
  lifebuoy: IconLifebuoy,
  lock: IconLock,
  'mail-forward': IconMailForward,
  package: IconPackage,
  photo: IconPhoto,
  'plug-connected': IconPlugConnected,
  'receipt-tax': IconReceiptTax,
  refresh: IconRefresh,
  robot: IconRobot,
  route: IconRoute,
  search: IconSearch,
  server: IconServer,
  'shield-check': IconShieldCheck,
  'stack-2': IconStack2,
  tags: IconTags,
  'target-arrow': IconTargetArrow,
  'truck-delivery': IconTruckDelivery,
  'user-check': IconUserCheck,
  'users-group': IconUsersGroup,
};

export default function ProjectIcon({ icon, ...props }: ProjectIconProps) {
  if (!icon) return null;

  const Icon = icons[icon];

  return <Icon {...props} />;
}
