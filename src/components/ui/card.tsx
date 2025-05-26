import * as React from 'react';
import {cn} from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  accentColor?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({className, accentColor, ...props}, ref) => (
    <div
      ref={ref}
      className={cn(
        'relative rounded-2xl border border-white/20 bg-white/30 backdrop-blur-md shadow-xl transition-transform duration-200 hover:scale-[1.025] hover:shadow-2xl',
        className
      )}
      {...props}
    >
      {accentColor && (
        <span
          className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
          style={{background: accentColor}}
        />
      )}
      {props.children}
    </div>
  )
);
Card.displayName = 'Card';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({className, ...props}, ref) => (
  <div ref={ref} className={cn('p-8 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export {Card, CardContent};
