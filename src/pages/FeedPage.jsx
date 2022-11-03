import { Card, CardContent, CardHeader, Container } from '@mui/material';

function FeedPage() {
    return (
        <Container maxWidth={'xs'}>
            <Card>
                <CardHeader> Header</CardHeader>
                <CardContent>
                    Content
                </CardContent>
            </Card>
        </Container>

    )
}

export { FeedPage }