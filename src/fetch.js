import { ref } from 'vue'
import projectsData from '@/data/projects.json'

export function fetchProjects() {
  const data = ref(null)
  const filteredData = ref(null)
  const error = ref(null)

  data.value = filteredData.value = projectsData

  return { data, filteredData, error }
}
