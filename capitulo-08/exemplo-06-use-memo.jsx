function Dashboard() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const userSettings = useMemo(
    () => ({ theme, count }),
    [theme, count]
  );

  return (
    <div>
      <Settings settings={userSettings} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}

const Settings = memo(function Settings({ settings }) {
  return (
    <div>
      <p>Theme: {settings.theme}</p>
      <p>Count: {settings.count}</p>
    </div>
  );
});