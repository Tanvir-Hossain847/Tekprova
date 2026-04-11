import { getProjects } from '@/lib/projects';
import { addProject, deleteProject } from '@/app/actions/projects';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  const projects = getProjects();

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Top bar */}
      <header className="border-b border-border px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-heading text-lg font-bold text-foreground">Tekprova</span>
          <Separator orientation="vertical" className="h-5" />
          <span className="text-muted-foreground text-sm">Dashboard</span>
        </div>
        <Badge variant="outline" className="text-primary border-primary/30">
          {projects.length} projects
        </Badge>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10">

        {/* Add project form */}
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Add project</h1>
          <p className="text-muted-foreground text-sm mb-6">New entries appear live on the homepage.</p>

          <Card className="bg-card border-border">
            <CardContent className="pt-6">
              <form action={addProject} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" placeholder="Buildora Platform" required />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" name="category" placeholder="Web App · Design" required />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="year">Year</Label>
                  <Input id="year" name="year" placeholder="2024" maxLength={4} required />
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="description">Description <span className="text-muted-foreground">(optional)</span></Label>
                  <Textarea id="description" name="description" placeholder="Brief project description..." rows={3} />
                </div>

                <Button type="submit" className="self-start bg-primary text-primary-foreground hover:bg-primary/80">
                  Add project
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Project list */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-1">All projects</h2>
          <p className="text-muted-foreground text-sm mb-6">Delete to remove from the homepage.</p>

          <div className="flex flex-col gap-3">
            {projects.length === 0 && (
              <p className="text-muted-foreground text-sm">No projects yet.</p>
            )}
            {projects.map((p) => (
              <Card key={p.id} className="bg-card border-border">
                <CardHeader className="pb-2 pt-4 px-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-base font-semibold text-foreground">{p.title}</CardTitle>
                      <CardDescription className="text-xs mt-0.5">{p.category} · {p.year}</CardDescription>
                    </div>
                    <form action={deleteProject.bind(null, p.id)}>
                      <Button
                        type="submit"
                        variant="ghost"
                        size="sm"
                        className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 text-xs h-7 px-2"
                      >
                        Delete
                      </Button>
                    </form>
                  </div>
                </CardHeader>
                {p.description && (
                  <CardContent className="pt-0 px-5 pb-4">
                    <p className="text-muted-foreground text-xs leading-relaxed">{p.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
