import type { Localized } from "../../schema";
import type { search as esSearch } from "../../es/search";

// English translations: global search
export const search: Localized<typeof esSearch> = {
  openLabel: "Search the site",
  title: "Search projects and articles",
  placeholder: "Search by title, description or category…",
  closeLabel: "Close search",
  resultsLabel: "Search results",
  instructions:
    "Use the arrow keys to browse results, Enter to open one and Escape to close.",
  emptyTitle: "No results",
  emptyDescription: "Try another word or browse the published projects.",
  projectKind: "Project",
  postKind: "Article",
  pageKind: "Page",
  pageCategory: "Navigation",
  pageHome: "Home",
  projectCategories: {
    "business-software": "Business Software",
    "developer-tools": "Developer Tools",
    infrastructure: "Infrastructure",
    experiments: "Experiments",
  },
};
