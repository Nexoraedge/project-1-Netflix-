document.querySelectorAll(".boxque").forEach((question) => {
    question.addEventListener("click", function () {
      // Get the associated answer
      const answer = this.nextElementSibling;
  
      // Toggle active state for the clicked FAQ
      const isExpanded = answer.style.maxHeight;
  
      // Close all answers
      document.querySelectorAll(".boxans").forEach((ans) => {
        ans.style.maxHeight = null; // Reset height to close
      });
  
      // Open the clicked answer only if it was previously closed
      if (!isExpanded) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
  