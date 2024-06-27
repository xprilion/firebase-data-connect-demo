import { listInbox, ListInboxResponse, listUsers, ListUsersResponse } from '@dataconnectdemo/email'
import  { dataConnect } from "@/app/libs/data-connect";
import Email from './emails';

export default async function Home() {
	const uid = "00001"

	const dc = dataConnect;

	let emails: ListInboxResponse['emails'] = [];
	try {
		const response = await listInbox(dc, { uid });
    const data = response.data;
		emails = data.emails
	} catch(e) {
		console.error("Error: ", e)
	}

	const firstEmail = emails.at(0)!;

	return (
      emails.length > 0 ? (
        <Email 
        initialEmails={emails}
        firstEmail={firstEmail}
        uid={uid}
       />
      ) : (
        <>No emails!</>
      )
  );
}
