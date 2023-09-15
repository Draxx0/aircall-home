export interface integrationPresentationType {
  integrations: {
    title: string;
    subtitle: string;
    integrations_data: {
      image: string;
      integration_name?: string;
      integration_role?: integrationRoleType;
    }[];
  };
}

type integrationRoleType =
  | "CRM"
  | "Help Desk"
  | "Help Desk - Live Chat"
  | "Ecommerce"
  | "Productivité";
