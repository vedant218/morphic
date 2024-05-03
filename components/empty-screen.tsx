import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: 'Can you help me create a Schedule to Study for jee mains',
    message: 'Can you help me create a Schedule to Study for jee mains'
  },
  {
    heading: 'Help me revise physics for JEE Mains in one month',
    message: 'Help me revise physics for JEE Mains in one month'
  },
  {
    heading:
      'I dont feel confident enough to score well in JEE Mains. Help me motivate myself.',
    message:
      'I dont feel confident enough to score well in JEE Mains. Help me motivate myself.'
  },
  {
    heading:
      'I finished studying thermodynamics. create a short test for me with JEE level questions',
    message:
      'I finished studying thermodynamics. create a short test for me with JEE level questions'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
