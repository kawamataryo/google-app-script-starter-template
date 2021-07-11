const greeting = () => {
  Logger.log("Hello World");
};

(global as any).greeting = greeting;
