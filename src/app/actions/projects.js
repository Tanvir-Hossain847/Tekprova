'use server';
import { getProjects, saveProjects } from '@/lib/projects';
import { revalidatePath } from 'next/cache';

export async function addProject(formData) {
  const title       = formData.get('title')?.toString().trim();
  const category    = formData.get('category')?.toString().trim();
  const year        = formData.get('year')?.toString().trim();
  const description = formData.get('description')?.toString().trim() ?? '';

  if (!title || !category || !year) {
    return { error: 'Title, category and year are required.' };
  }

  const projects = getProjects();
  const id = String(projects.length + 1).padStart(2, '0');
  projects.unshift({ id, title, category, year, description });
  saveProjects(projects);
  revalidatePath('/');
  revalidatePath('/dashboard');
  return { success: true };
}

export async function deleteProject(id) {
  const projects = getProjects().filter(p => p.id !== id);
  saveProjects(projects);
  revalidatePath('/');
  revalidatePath('/dashboard');
  return { success: true };
}
