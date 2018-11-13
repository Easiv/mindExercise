import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      { content: "question 1" },
      { content: "question 2" },
      { content: "question 3" }
    ]
  }
});
