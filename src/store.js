import { reactive } from 'vue'
import { projects } from '@/lib/stores/projects'

export const store = reactive({
  filterValue: "*",

  projects: [],
  getProjects() {
    projects.init().then(() => {

    })
  },

  filterProjects(tag) {
    this.filterValue = tag
    this.projects.filteredData = this.projects.data.filter(function (project) {
      return (project.metadata.tags[0] && project.metadata.tags[0].sys.id == tag) || tag == '*'
    });
  }


})
