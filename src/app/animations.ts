import { trigger, animateChild, group, transition, animate, style, query } from '@angular/animations'

export const fadeInAnimation = trigger('routeAnimation', [
    transition('drumset <=> edit-drumset, drumset <=> drumset', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        query(':enter', [
            style({ opacity: 0, display: 'block' })
        ]),
        query(':leave', [
            style({opacity: 1, display: 'block' })
        ]),
        query(':leave', animateChild()),
        group([
            query(':leave', [
                animate('500ms ease-in-out', style({opacity: 0}))
            ]),
            query(':enter', [
                animate('500ms 510ms ease-in-out', style({opacity: 1}))
            ])
        ]),
        query(':enter', animateChild())
    ])
])