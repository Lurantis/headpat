export default nodecg => {
  console.log('test')
  const timeReplicant = nodecg.Replicant('timestamp', {defaultValue: 1562259347886})
  const nameReplicant = nodecg.Replicant('name', {defaultValue: "fellow reactive bundle craftsman"})
}