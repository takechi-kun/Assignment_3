import api from "./api";

export async function getTopic(setListTopic, loadMore, setLast_Id) {
  //const assign1 = `/get_topic?loadMore=${loadMore}`
  const assign3 = `/get_topic_more/${loadMore}`
  return await api.get(assign3).then((response) => {
    setListTopic(response.data.data);
    setLast_Id(response.data.last_id)
  });
}
