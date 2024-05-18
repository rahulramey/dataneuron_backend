export const logRequestStartTime = (req, res, next) => {
    req.startTime = Date.now(); // start time 
    next();
  };

export const logRequestExecutionTime = (req, res, next) => {
    const endTime = Date.now(); // end time
    const executionTime = endTime - req.startTime;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - Execution time: ${executionTime}ms`);
    next();
  };

