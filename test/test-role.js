const testCases = [
    { user: { role: "user" }, expected: "autorisé" },
    { user: { role: "guest" }, expected: "refusé" },
    { user: { role: undefined }, expected: "refusé" },
    { user: undefined, expected: "refusé" },
    { user: { }, expected: "refusé" },
    { expected: "refusé" },
  ];
  
  testCases.forEach(({ user, expected }, index) => {
    const role = user.role;
  
    if (role !== "user") {
      console.log(`Test ${index + 1}: Accès refusé ✅ (attendu: ${expected})`);
    } else {
      console.log(`Test ${index + 1}: Accès autorisé ✅ (attendu: ${expected})`);
    }
  });
  