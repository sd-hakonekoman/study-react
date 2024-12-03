import classes from './CssModules.module.scss'

export const CssModules = () => {
  return (
    <>
      <h3>CSS Modules</h3>
      <div className={classes.container}>
        <p className={classes.title}>CSS Modulesです</p>
        <button type="button" className={classes.button}>ボタン</button>
      </div>
    </>
  )
}
