import app from './app';

app.listen(process.env.PORT, () => {
  console.log(`> Ready on port: ${process.env.PORT}`);
});
