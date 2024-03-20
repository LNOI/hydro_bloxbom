function Button({
  label,
  onClick,
  variants = 'contained',
  extraClass = '',
  color = 'mainColor',
  disabled,
}) {
  const genClasses = () => {
    let classes = '';
    switch (variants) {
      case 'contained':
        classes = classes + 'button-contained';
        break;
      case 'outlined':
        classes = classes + 'button-outlined';
        break;
      case 'text':
        classes = classes + 'button-text';
        break;
    }
    switch (color) {
      case 'mainColor':
        classes = classes + ' ' + 'button-mainColor';
        break;
      case 'secondary':
        classes = classes + ' ' + 'button-secondaryColor';
        break;
    }

    return classes;
  };
  return (
    <button
      disabled={disabled}
      className={`${genClasses()} ${extraClass}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default Button;
