import { ID, Query } from "appwrite";
import { databases } from "@/appwrite";
import { reactive } from "vue";

export const PROJECTS_DATABASE_ID = "671fe917003113944021";
export const PROJECTS_COLLECTION_ID = "671fe91c00310e5753bf";

export const projects = reactive({
  current: [],
  async init() {
    const response = await databases.listDocuments(
      PROJECTS_DATABASE_ID,
      PROJECTS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    this.current = response.documents;
  },
});
