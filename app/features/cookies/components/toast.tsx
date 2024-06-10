import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Form } from "@remix-run/react";
import { CookiesModal } from "./modal";

interface CookiesToastProps {
  visible: boolean;
}
export function CookiesToast(props: CookiesToastProps) {
  return (
    <Card
      className="absolute bottom-0 w-full md:w-auto md:max-w-96 md:bottom-4 md:right-4 opacity-0 translate-y-full data-[state-visible=true]:translate-y-0 data-[state-visible=true]:opacity-100"
      data-state-visible={props.visible}
    >
      <CardHeader>
        <CardTitle>Our site is using 🍪 cookies!</CardTitle>
      </CardHeader>
      <CardContent>
        Yes, these pop-ups are annoying. We know. Either way, we've to inform
        you which ones we're using
      </CardContent>
      <CardFooter className="justify-end gap-4">
        <CookiesModal />
        <Form method="post" action="/">
          <input type="hidden" name="intent" value="close_cookie_banner" />
          <Button type="submit" variant="secondary">
            Close
          </Button>
        </Form>
      </CardFooter>
    </Card>
  );
}
