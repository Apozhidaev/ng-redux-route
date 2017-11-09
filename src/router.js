export default ($location) => ({
  url: $location.url(),
  path: $location.path(),
  params: { ...$location.search() },
  hash: $location.hash(),
  state: $location.state(),
});
