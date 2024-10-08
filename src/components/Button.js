import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
   children,
   primary,
   secondary,
   success,
   warning,
   danger,
   outline,
   rounded,
   ...rest
}) {
   const classes = className(
      rest.className,
      'flex items-center px-3 py-1.5 border',
      {
         'border-blue-500 bg-blue-500 text-black': primary,
         'border-gray-900 bg-gray-900 text-black': secondary,
         'border-green-900 bg-green-500 text-black': success,
         'border-yellow-400 bg-yellow-400 text-black': warning,
         'border-red-500 bg-red-500 text-black': danger,
         'rounded-full': rounded,
         'bg-white': outline,
         'text-blue-500': outline && primary,
         'text-gray-900': outline && secondary,
         'text-black-500': outline && success,
         'text-yellow-400': outline && warning,
         'text-black-500': outline && danger
      }
   );

   return (
      <button {...rest} className={classes}>
         {children}
      </button>
   );
}

Button.propTypes = {
   checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
      const count =
         Number(!!primary) +
         Number(!!secondary) +
         Number(!!warning) +
         Number(!!success) +
         Number(!!danger);

      if (count > 1) {
         return new Error(
            'only one of primary, secondary, warning, success can be true'
         );
      }
   }
};

export default Button;
