export function EdgeDivider() {
  return (
    <svg
      viewBox="0 0 200 10"
      preserveAspectRatio="none"
      style={{ width: "100%", height: 10, display: "block" }}
    >
      <polyline
        // points="0,0 10,10 20,0 30,10 40,0 50,10 60,0 70,10 80,0 90,10 100,0 110,10 120,0 130,10 140,0 150,10 160,0 170,10 180,0 190,10 200,0"
        points="0,0  200,0"
        fill="none"
        stroke="var(--mantine-color-ember-5)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
