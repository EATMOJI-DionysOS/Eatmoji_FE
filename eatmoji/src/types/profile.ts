export interface Preference {
  category: {
    add: string[];
    remove: string[];
  };
  flavor: {
    add: string[];
    remove: string[];
  };
  disease: {
    add: string[];
    remove: string[];
  };
  allergy: {
    add: string[];
    remove: string[];
  };
}

export interface UserProfileData {
  category: string[];
  flavor: string[];
  disease: string[];
  allergy: string[];
}