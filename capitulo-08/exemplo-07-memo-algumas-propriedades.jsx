function Dashboard() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  return (
    <div>
      <Settings theme={theme} count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

const Settings = memo(function Settings({ theme, count }) {
  return (
    <div>
      <p>Theme: {theme}</p>
      <p>Count: {count}</p>
    </div>
  );
});