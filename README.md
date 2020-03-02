# Scheduling-System
Scheduling Task Algorithm

Approach:
1. Created Stack(visitedStack) for visited/scheduled tasks to be run.
2. Pushed every current task non-ran(checking the ranObj) in the stack.
3. Checked dependency of the task and push the dependency in the stack again.
4. If no dependency push it in the ranObj.
5. Repeat step 2,3 & 4 till the stack is empty.
6. Run for the next task if the task in not run yet i.e checking the ranObj.
7. If tasks ran is equal not to inital tasks there is cyclic dependency otherwise system can be scheduled.

Test Cases:
1. Test the stack class.
2. Test the scheduling system.

Run Test Cases: 
  - npm run test
